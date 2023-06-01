import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '@components/header/index';
import Login from '@pages/Login';
import IssueList from '@pages/IssueList';
import IssueForm from '@pages/IssueForm';
import IssueDetail from '@pages/IssueDetail';
import MilestoneList from '@pages/MilestoneList';
import LabelList from '@pages/LabelList';

// 초기 라우터 컴포넌트 항목 미리 적용
// 라우트 코드가 반복되서 중복 코드 분리 고민
const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<IssueList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/labelList" element={<LabelList />} />
        <Route path="/issueForm" element={<IssueForm />} />
        <Route path="/issueDetail" element={<IssueDetail />} />
        <Route path="/milestoneList" element={<MilestoneList />} />
        <Route path="/labelList" element={<LabelList />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
