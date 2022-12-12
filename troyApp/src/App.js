import React from 'react';
import Home from './components/Home/index.jsx';
import "../src/assests/css/style.css"
import "../src/assests/css/responsive.css"
import ContactPage from './components/ContactUs/index.jsx';
import { Routes, Route } from 'react-router-dom';
import SignInHome from './components/SignIn/index.jsx';
import ProfileSec from './components/ProfilePages/index.jsx';
import BusinessInfoPage from './components/BuinessInformation/index.jsx';
import BenchmarkPremiumPage from './components/BenchmarkBusinessPremium/index.jsx';
import BenchmarkBusinessPage from './components/BenchmarkBusiness/index.jsx';
import Glossary from './components/SubComponent/BasicChart/Glossary/Glossary.jsx';
import IncomeStatement from './components/SubComponent/BasicChart/IncomeStatement/IncomeStatement.jsx';
import BalanceSheet from './components/SubComponent/BasicChart/BalanceSheet/BalanceSheet.jsx';
import Profitability from './components/SubComponent/BasicChart/Profitability/Profitability.jsx';
import CostOfSale from './components/SubComponent/BasicChart/CostOfSale/CostOfSale.jsx';
import OperatingExpenses from './components/SubComponent/BasicChart/OperatingExpenses/OperatingExpenses.jsx';
import ProfitabilityTwo from './components/SubComponent/BasicChart/ProfitabilityTwo/ProfitabilityTwo.jsx';
import BalanceSheetAnalysis from './components/SubComponent/BasicChart/BalanceSheetAnalysis/BalanceSheetAnalysis.jsx';
import LeverageDebtOfEquaty from './components/SubComponent/BasicChart/LeverageDebtOfEquity/LeverageDebtOfEquaty.jsx';
import LeverageDebtCApitalization from './components/SubComponent/BasicChart/LeverageDebtOfCapitalization/LeverageDebtCApitalization.jsx';
import Liquidity from './components/SubComponent/BasicChart/Liquidity/Liquidity.jsx';
import Efficiency from './components/SubComponent/BasicChart/Efficiency/Efficiency.jsx';
import UpperEfficiency from './components/SubComponent/BasicChart/UpperEfficeincy/UpperEfficiency.jsx';


function App() {
  return (
    <div className="App">
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/signinpage" element={<SignInHome />} />
        <Route path="/profile" element={<ProfileSec />} />
        <Route path="/businessinfo" element={<BusinessInfoPage />} />
        <Route path="/benchmarkpremium" element={<BenchmarkPremiumPage />} />
        <Route path="/benchmarkbusiness" element={<BenchmarkBusinessPage />} />
        


        <Route path="/incomestatement" element={<IncomeStatement />} />
        <Route path="/balancesheet" element={<BalanceSheet />} />
        <Route path="/" element={<Profitability />} />
        <Route path="/" element={<CostOfSale />} />
        <Route path="/" element={<OperatingExpenses />} />
        <Route path="/" element={<ProfitabilityTwo />} />
        <Route path="/" element={<BalanceSheetAnalysis />} />
        <Route path="/" element={<LeverageDebtOfEquaty />} />
        <Route path="/" element={<LeverageDebtCApitalization />} />
        <Route path="/" element={<Liquidity />} />
        <Route path="/" element={<Efficiency />} />
        <Route path="/" element={<UpperEfficiency />} />
        <Route path="/" element={<Glossary />} />
        {/* <Route path="/glossary" element={<Glossary />} /> */}
      </Routes>
        {/* <Home /> */}
        {/* <ContactPage /> */}
    </div>
  );
}

export default App;
