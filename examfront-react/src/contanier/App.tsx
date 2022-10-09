import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { routes } from 'routes'
import Layout from 'layout/Layout'



function App() {
  return (
    
      <Router>
        <Layout>
          <Routes>
            {routes.map((item, index) => (
              <Route key={index} path={item.path} element={item.element} />
            ))}
          </Routes>
        </Layout>
      </Router>
    
  )
}

export default App
