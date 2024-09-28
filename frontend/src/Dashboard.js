import Navibar from "./components/Navibar";
const Dashboard = ()=>{
    return(
        <div> 
             <div>
            <Navibar/>
            </div>
            <div >
               <div className="dashboard-container">
               <div className="section-container">
              <section>
                <h2>Lecture Tab</h2>
                   <p>
                    You can learn through YouTube videos using the lecture tab.
                   </p>
             </section>
              </div>
              <div className="section-container">
             <section>
                <h2>Quiz Tab</h2>
                   <p>
                   If you want to take a quiz, you can go to the quiz tab.
                  </p>
             </section>
              </div>
              <div className="section-container">
             <section >
               <h2>About Tab</h2>
                  <p>
                  If you want to track your physical attention during the learning period, you can start our tracking system from the About tab.
                  </p>
             </section>
             </div>
             <div className="section-container">
              <section>
                <h2>Participation Tab</h2>
                  <p>
                   Finally, if you want to see your tracking results, go to the participation tab.
                  </p>
              </section>
              </div>
              </div>
           </div>
        </div>
        
    )
}
export default Dashboard;