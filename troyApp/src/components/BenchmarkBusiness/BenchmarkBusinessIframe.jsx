import React from 'react'

import BalanceSheetAnalysis from '../SubComponent/BasicChart/BalanceSheetAnalysis/BalanceSheetAnalysis'
import Efficiency from '../SubComponent/BasicChart/Efficiency/Efficiency'
import IncomeStatement from '../SubComponent/BasicChart/IncomeStatement/IncomeStatement'
import LeverageDebtCApitalization from '../SubComponent/BasicChart/LeverageDebtOfCapitalization/LeverageDebtCApitalization'
import LeverageDebtOfEquaty from '../SubComponent/BasicChart/LeverageDebtOfEquity/LeverageDebtOfEquaty'
import Liquidity from '../SubComponent/BasicChart/Liquidity/Liquidity'
import OperatingExpenses from '../SubComponent/BasicChart/OperatingExpenses/OperatingExpenses'
import Profitability from '../SubComponent/BasicChart/Profitability/Profitability'
import ProfitabilityTwo from '../SubComponent/BasicChart/ProfitabilityTwo/ProfitabilityTwo'
import UpperEfficiency from '../SubComponent/BasicChart/UpperEfficeincy/UpperEfficiency'
import BalanceSheet from '../SubComponent/BasicChart/BalanceSheet/BalanceSheet'
import BenchmarkYourBusinessFilter from '../SubComponent/BasicChart/BenchMarkBusinessFilter/BenchmarkYourBusinessFilter'
import CostOfSale from '../SubComponent/BasicChart/CostOfSale/CostOfSale'
import BasicChartPagination from '../SubComponent/BasicChart/BasicChartPagination/BasicChartPagination'
import Glossary from '../SubComponent/BasicChart/Glossary/Glossary'


const BenchmarkBusinessIframe = () => {
  return (
    <div className='iframe-section'>
      <div className='benchmark-business-iframe'>
      <BenchmarkYourBusinessFilter />
        <IncomeStatement />
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
        <Glossary />        
      </div>
      <div className='iframePagination'>
        <BasicChartPagination />
      </div>
    </div>
  )
}

export default BenchmarkBusinessIframe
