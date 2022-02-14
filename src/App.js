
import { Route, Switch } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetup';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorite';

import Layout from './components/layout/Layout';


function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
        <AllMeetupsPage />
        </Route>
        <Route path='/new-meetup'>
          <NewMeetupPage />
        </Route>
        <Route path='/favorites'>
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

//.....................................

// import { Route,Switch,Redirect } from 'react-router-dom';
// import Welcome from './pages/Welcome';
// import Products from './pages/Products';
// import MainHeader from './components/MainHeader';
// import ProductDetail from './pages/ProductDetail';


// function App() {
//   return (
//     <div>
//       <MainHeader />
//       <main>
//       <Switch>
//         <Route path='/welcome'>
//         <Redirect to='/welcome' />
//           <Welcome />
//         </Route>
//         <Route path='/products' exact>
//           <Products />
//         </Route>
//         <Route path='/product-detail/:productId'>
//           <ProductDetail />
//         </Route>
//         </Switch>
//       </main>
//     </div>
//   );
// }

// export default App;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
// our-domain.com/product-detail/anythink u want to write
