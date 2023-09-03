import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header information */}
      
    <header id='header'>
      <div className='container'>
      <div className='col-6'>
        <div className='row'>
          <h1><a href='#'>Simphiwe Kona</a></h1>
        </div>
        <div className='navbar' id='navbar'>
          <ul>
            <li><a className='nav-link' href='#header'>Home</a></li>
            <li><a className='nav-link'>About</a></li>
            <li><a className='nav-link'>Resume</a></li>
            <li><a className='nav-link'>Services</a></li>
            <li><a className='nav-link'>Portfolio</a></li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </div>
        {/* Social Link */}
        <div className='row social-links'>
        <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
        <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
        <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
        <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>

        </div>
      </div>
      </div>
      </header>


      <button className='btn btn-primary'>Submit</button>
      </div>
    
  );
}

export default App;
