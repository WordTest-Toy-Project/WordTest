const express = require('express');
const router = express.Router();
const db = require('../db/db');


router.get('/setSession/:username', (req, res) =>{
  const { username } = req.params;
  req.session.username = username;
  res.send(`Session ID set for ${username}!`);
});

router.get('/getSession', (req, res) =>{
  const sessionId = req.session.username || 'No session ID';
  res.send(`Session ID: ${sessionId}`);
});

//사용자 계정 생성
router.post('/signup', (req, res) => {
  console.log('Signup route called');
  const { username, password, chkPassword } = req.body;

  // 필수 입력값이 비어있는지 확인
  if (!username || !password || !chkPassword) {
    return res.status(400).json({ error: 'username, password, and chkPassword are required.' });
  }

  // 비밀번호 확인
  if (password !== chkPassword) {
    return res.status(400).json({ error: 'Password and chkPassword do not match.' });
  }

  // 사용자 계정 생성 쿼리
  const createUserQuery = `INSERT INTO users (username, password) VALUES (?, ?)`;

  // 데이터베이스에 중복된 사용자 이름이 있는지 확인
  const checkDuplicateQuery = 'SELECT * FROM users WHERE username = ?';
  db.query(checkDuplicateQuery, [username], (checkErr, checkResults) => {
    if (checkErr) {
      console.error('Error checking duplicate username:', checkErr);
      return res.status(500).json({ error: 'Error creating user' });
    }

    if (checkResults.length > 0) {
      return res.status(400).json({ error: 'Username already exists.' });
    }

    // 중복이 없으면 사용자 추가
    db.query(createUserQuery, [username, password], (err, result) => {
      if (err) {
        console.error('Error creating user:', err);
        res.status(500).json({ error: 'Error creating user' });
      } else {
        res.json({ message: 'User created successfully' });
      }
    });
  });
});

// 로그인 엔드포인트
router.post('/signin', (req, res) => {
  const { username, password } = req.body;

  // 사용자 로그인 확인 쿼리
  const loginUserQuery = `SELECT * FROM users WHERE username = ?`;
  db.query(loginUserQuery, [username], (err, result) => {
    if (err) {
      console.error('Error checking login:', err);
      res.status(500).json({ error: 'Error checking login' });
    } else {
      if (result.length > 0) {
        const storedPassword = result[0].password;

        // 비밀번호 일치 여부 확인
        if (password === storedPassword) {
          // 로그인 성공
          res.json({ message: 'Login successful' });
        } else {
          // 로그인 실패 - 비밀번호 불일치
          res.status(401).json({ error: 'Invalid password' });
        }
      } else {
        // 로그인 실패 - 사용자가 존재하지 않음
        res.status(401).json({ error: 'User not found' });
      }
    }
  });
});

// 단어 추가 엔드포인트 수정
router.post('/addword', (req, res) => {
  const { words } = req.body;

  // 단어 추가 쿼리
  const addWordQuery = `INSERT INTO words (word, meaning) VALUES (?, ?)`;

  // 모든 단어를 비동기적으로 처리
  Promise.all(
    words.map(({ word, mean }) => {
      return new Promise((resolve, reject) => {
        db.query(addWordQuery, [word, mean], (err, result) => {
          if (err) {
            console.error('Error adding word:', err);
            reject({ error: 'Error adding word' });
          } else {
            resolve({ message: 'Word added successfully' });
          }
        });
      });
    })
  )
    .then((responses) => {
      // 모든 단어가 성공적으로 추가된 경우 응답
      res.json(responses);
    })
    .catch((error) => {
      // 중간에 에러가 발생한 경우 에러 응답
      res.status(500).json(error);
    });
});

// 클라이언트에 vocabulary 데이터 보내기
router.get('/study', (req, res) => {
  // 단어 조회 쿼리
  const selectWordsQuery = 'SELECT * FROM words';

  // 데이터베이스에서 단어 조회
  db.query(selectWordsQuery, (err, results) => {
    if (err) {
      console.error('Error fetching words:', err);
      res.status(500).json({ error: 'Error fetching words' });
    } else {
      // 조회된 단어 데이터를 클라이언트에 전송
      res.json(results);
    }
  });
});

router.delete('/deleteWord/:wordId', (req, res) => {
  const { wordId } = req.params;

  // 단어 삭제 쿼리
  const deleteWordQuery = 'DELETE FROM words WHERE word_id = ?';

  // 데이터베이스에서 해당 단어 삭제
  db.query(deleteWordQuery, [wordId], (err, result) => {
    if (err) {
      console.error('Error deleting word:', err);
      res.status(500).json({ error: 'Error deleting word' });
    } else {
      res.json({ message: 'Word deleted successfully' });
    }
  });
});

// 스크랩 상태 업데이트 또는 추가/삭제
router.post('/scrapWord/:id', (req, res) => {
  const wordId = parseInt(req.params.id);
  const { user_id, is_scrap } = req.body;

  // 스크랩 상태를 업데이트 또는 추가/삭제하는 쿼리
  const updateScrapQuery = 'INSERT INTO word_bookmarks (word_id, user_id, is_scrap) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE is_scrap = VALUES(is_scrap)';

  // 쿼리 실행
  db.query(updateScrapQuery, [wordId, user_id, is_scrap], (err, result) => {
    if (err) {
      console.error('Error updating or adding scrap:', err);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    } else {
      console.log('Scrap status updated');
      res.status(200).json({ success: true, message: 'Scrap status updated successfully' });
    }
  });
});

// main 페이지 단어 가져오기
router.get("/main", (req, res) => {
  const query = "SELECT word,meaning FROM words ORDER BY RAND() LIMIT 1";

  db.query(query, (error, results) => {
    if (error) {
      console.error("Error executing query:", error);
      res.status(500).json({ error: "Internal server error" });
    } else {
      const randomWord = results[0];
      res.json(randomWord);
    }
  });
});

// study에 추가하는 기능
router.post("/test", async (req, res) => {
  try {
    const { words } = req.body;

    // 데이터베이스에 받은 단어 저장
    // 여기서는 words 테이블에 저장하도록 가정하고 있습니다.
    const result = await db.query("INSERT INTO words (word, meaning) VALUES ?", [words.map(wordObj => [wordObj.word, wordObj.mean])]);

    res.json({ message: "Words added successfully", result });
  } catch (error) {
    console.error("Error adding words:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// 단어 시험 시작 화면
router.get("/test-start", async (req, res) => {
  try {
    // words 테이블에서 랜덤한 5개의 단어를 가져옴 (숫자는 필요에 따라 조절)
    const result = await db.query("SELECT * FROM words ORDER BY RAND() LIMIT 10");

    res.json(result);
  } catch (error) {
    console.error("Error fetching random words:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


router.get("/test-result", async(req,res)=>{
  const getWrongWordsQuery = 'SELECT * FROM words WHERE is_wrong = true';

  db.query(getWrongWordsQuery, (err, results) => {
    if (err) {
      console.error('Error fetching wrong words:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      const wrongWords = results.map((word) => ({ id: word.id, word: word.word, mean: word.mean }));
      res.json({ count: wrongWords.length, words: wrongWords });
    }
  });
});

// 사용자 삭제 엔드포인트
router.delete('/deleteUser', (req, res) => {
  const { username } = req.body;

  req.session.destroy((err) => {
    if (err) {
      console.error('Error destroying session:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {

      res.json({ message: 'User deleted successfully' });
    }
  });
});

module.exports = router;