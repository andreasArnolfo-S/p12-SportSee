import { Link } from "react-router-dom";

const Home = () => {


     return (
          <div style={{display: 'flex', gap: '5%', alignItems: 'center', justifyContent: 'center', marginTop: '20%'}}>
               <Link to='/user/12' style={{backgroundColor: 'red', padding: '20px', borderRadius: '5px', fontSize: '36px'}}>
                    user 12
               </Link>
               <Link to='/user/18' style={{backgroundColor: 'red', padding: '20px', borderRadius: '5px', fontSize: '36px'}}>
                    user 18
               </Link>
          </div>
     );
};

export default Home;