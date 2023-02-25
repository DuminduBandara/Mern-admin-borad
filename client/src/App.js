import { BrowserRouter, Navigate, Route, Router, Routes } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { themeSettings } from './theme';
import Dashboard from "./views/dashboard";
import Layout from "./views/layout";
import Products from "./views/products";
import Customers from "./views/customers";
import Transactions from "./views/transactions";
import Geography from "./views/geography";
import Overview from "./views/overview";
import Daily from './views/daily';
import Monthly from './views/montly';
import Breakdown from "./views/breakdown";
import Admin from "./views/admin";
import Performance from './views/performance';


function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout/>}>
              <Route path='/' element={<Navigate to="/dashboard" replace />}/>
              <Route path='/dashboard' element={<Dashboard/>}/>
              <Route path='/products' element={<Products/>}/>
              <Route path='/customers' element={<Customers/>}/>
              <Route path='/transactions' element={<Transactions/>}/>
              <Route path='/geography' element={<Geography/>}/>
              <Route path='/overview' element={<Overview/>}/>
              <Route path='/daily' element={<Daily/>}/>
              <Route path='/monthly' element={<Monthly/>}/>
              <Route path='/breakdown' element={<Breakdown/>}/>
              <Route path='/admin' element={<Admin/>}/>
              <Route path='/performance' element={<Performance/>}/>
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
