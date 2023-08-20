import Header from './components/Header'
import   {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import {ApolloProvider,ApolloClient,InMemoryCache} from '@apollo/client'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import Project from './pages/Project'
//for warnings while using cache
const cache=new InMemoryCache({
  typePolicies:{
    Query:{
      fields:{
        clients:{
          merge(existing,incoming){
            return incoming
          }
        },
        projects:{
          merge(existing,incoming){
            return incoming
          }
        }
      },
    }
  }
})
const client=new ApolloClient({
  uri:'http://localhost:5000/graphql',
  cache,
})
function App() {
  return (
    <>
    <ApolloProvider client={client}>
    <Router>
    <Header />
    <div className="container">
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/project/:id' element={<Project/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </div>
    </Router>
    </ApolloProvider>
    </>
  );
}

export default App;
