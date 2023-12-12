//library
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//pages
import Signin from './pages/signin/Signin';
import Signup from './pages/signup/Signup';
import Main from './pages/main/Main';
import Test from './pages/test_page/Test';
import TestStart from './pages/test_start/Test_start';
import TestResult from './pages/test_result/Test_result';
import Mypage from './pages/mypage/Mypage';
import Study from './pages/study/Study';
import Favorite from './pages/favorite/Favorite';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/main" element={<Main/>} />
        <Route path="/test" element={<Test/>} />
        <Route path="/test-start" element={<TestStart/>} />
        <Route path="/test-result" element={<TestResult/>} />
        <Route path="/mypage" element={<Mypage/>} />
        <Route path="/study" element={<Study/>} />
        <Route path="/favorite" element={<Favorite/>} />
      </Routes>
    </Router>
  );
}

export default App;
