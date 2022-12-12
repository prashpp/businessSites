import * as React from 'react';
import { Link, MemoryRouter, Route, Routes, useLocation } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { Box } from '@mui/system';
import IncomeStatement from '../IncomeStatement/IncomeStatement';
import BalanceSheet from '../BalanceSheet/BalanceSheet';
import Profitability from '../Profitability/Profitability';
import CostOfSale from '../CostOfSale/CostOfSale';
import OperatingExpenses from '../OperatingExpenses/OperatingExpenses';
import ProfitabilityTwo from '../ProfitabilityTwo/ProfitabilityTwo';
import BalanceSheetAnalysis from '../BalanceSheetAnalysis/BalanceSheetAnalysis';
import LeverageDebtOfEquaty from '../LeverageDebtOfEquity/LeverageDebtOfEquaty';
import LeverageDebtCApitalization from '../LeverageDebtOfCapitalization/LeverageDebtCApitalization';
import Liquidity from '../Liquidity/Liquidity';
import Efficiency from '../Efficiency/Efficiency';
import UpperEfficiency from '../UpperEfficeincy/UpperEfficiency';
import Glossary from '../Glossary/Glossary';


function Content({ to }) {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page') || '1', 10);

  return (
    <>
  <Link to={`/${to}`}>
  <Routes>
  <Route path="incomestatement" element={<IncomeStatement />} />
  <Route path="balancesheet" element={<BalanceSheet />} />
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
      </Routes>
 
  
  <Pagination
      page={page}
      count={14}
      renderItem={(item) => (
        <PaginationItem
          component={Link}
          to={`/${item.page === 1 ? '' : `?page=${item.page}`}`}
          {...item}
        />
      )}
    />
     
</Link>
  </>
  );
}

export default function BasicChartPagination() {
  return (
   <Box className="basicPagination">
     <Routes >
        <Route path="*" element={<Content />} />
      </Routes>

      {/* <IncomeStatement />
        <BalanceSheet />
        <Profitability />
        <CostOfSale />
        <OperatingExpenses />
        <ProfitabilityTwo />
        <BalanceSheetAnalysis />
        <LeverageDebtOfEquaty />
        <LeverageDebtCApitalization /> 
        <Liquidity />
        <Efficiency />
        <UpperEfficiency />
        <Glossary /> */}
   </Box>
     

  );
}
