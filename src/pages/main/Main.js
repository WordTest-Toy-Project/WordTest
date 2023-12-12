import { Container, Horizon, SettingBox, TodayWord, Yellow } from './style';
import { WordTest , RandomWord,WordContainer } from './style';
import {TodayLearn, TodayTest} from './style';
import React from 'react';
import { Link } from 'react-router-dom';


export default function Main() {
    return (
      <div>
        <Container>
          <Link to="/mypage">
            <SettingBox>
              <img src="/image/gear.png" alt="sorry" width={90} height={90}></img>
            </SettingBox> 
            
          </Link>

          <WordTest>Word Test</WordTest>

          <WordContainer>
            <TodayWord>오늘의 <Yellow>단어</Yellow></TodayWord>
            <RandomWord>value ㅇㄴㅁㄹ</RandomWord>
          </WordContainer>
          
          <Horizon></Horizon>

          <Link to="/study">
            <TodayLearn>오늘의 <Yellow>학습</Yellow></TodayLearn>
          </Link>

          <Link to="/test">
            <TodayTest>오늘의 <Yellow>Test</Yellow></TodayTest>
          </Link>
         
        </Container>
        
      </div>
      
    );
  }
