
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/NavigationBar";
import Banner from "./components/Banner";
import Images1  from "./images/home.jpg"; 
import Images2  from "./images/home2.jpg";
import Images3  from "./images/home3.jpg";
import Images4  from "./images/home4.jpg";
import Images5  from "./images/home5.jpg";
import Images6  from "./images/home6.jpg";
import GridItems from "./components/griditems";
import Footer from "./components/Footer";


function App() {
  return (
    <>
    <NavigationBar></NavigationBar>
    <Banner></Banner>
    <div className="bg-dark p-5">
      <div className="container">
        <h1 className="text-warning">My top 6 Anime</h1>
        <div className="row g-5 justify-content-center">
          <GridItems name="Utchiha" imageFile={Images1} desc="Lorem Ipsum Isnun"></GridItems>
          <GridItems name="Utchiha clan" imageFile={Images2} desc="Lorem Ipsum Isnun"></GridItems>
          <GridItems name="Utchiha Sasuke" imageFile={Images3} desc="Lorem Ipsum Isnun"></GridItems>
          <GridItems name="Sakura" imageFile={Images4} desc="Lorem Ipsum Isnun"></GridItems>
          <GridItems name="Hinata" imageFile={Images5} desc="Lorem Ipsum Isnun"></GridItems>
          <GridItems name="Lee" imageFile={Images6} desc="Lorem Ipsum Isnun"></GridItems>
        </div>

      </div>
    </div>
    <Footer></Footer>
    </>
  );
}

export default App;
