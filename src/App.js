import "./App.css";


const GridDesign = () => {
  return (
    <div>
      <nav className="nav-bar">
        <div className="left-topbar">
          <ul className="edyoda-stories">
            <li className="edyoda-logo">  <strong>EDYODA</strong> </li>  
            <li className="storie-text">Stories</li>
          </ul>
          <p className="explore-categories">Explore Categories <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAGCAYAAAD37n+BAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHhJREFUeNpiYGBguAPE/f///2fAh0FqgPguiBEDxC+BeDUQM2NRyAyVewlWCxW0B+L7QHwAiHmRFPNCxUBy9mAxJElVIL4MxBeBWB6KL0LFVOHq0KwXAuJDQHwPikFsIWQ1jFCFcMDIyMgGpFZAuRFA+V/I8gABBgD8EGd4shdx5wAAAABJRU5ErkJggg==" alt="" className="drop-down"/></p>
        </div>
        <div className="right-topbar">
          <p className="topbar-para">
            EdYoda is a learning and knowledge <br />
            sharing platform for techies
          </p>
          <button className="website-btn">Go to main website </button>
        </div>
      </nav>
      <div className="latest-post-blog">
        <h1 className="latest-post-heading">Latest posts</h1>
        <div className="filter-logo-para">
        <img
            src="https://drive.google.com/uc?export=download&id=1CfIpLg9xLa-aQbnjjUpSjxpg5JOESbVo"
            alt="filter-logo"
            className="filter-logo"
          /> 
         <p className="filter-para">Filter by category</p></div>
        <ul className="latest-post-blog-categories">
          <li className="lpbc1">All</li>
          <li className="lpbc">Artificial Intelligence</li>
          <li className="lpbc">Cloud Computing</li>
          <li className="lpbc">Devops</li>
          <li className="lpbc">Programming Languages</li>
          <li className="lpbc">Mobile Application Development</li>
          <li className="lpbc">Technology and Tools</li>
          <li className="lpbc">Get a Job in a Tech Company</li>
          <li className="lpbc">Others</li>
        </ul>
      </div>

      <div className="card-row">
        <div className="card-1">
          <img
            src="https://edyoda.s3.amazonaws.com/media/blog-images/7_reasons_to_learn_Python_u3lFION.jpg"
            alt="card-1"
            className="card-img-1"
          />
          <div className="img-description">
            <p className="card-title">
              <b>Fresh Graduate or IT professional Looking for </b>{" "}
            </p>
            <p className="name-date">
              <span className="name-link"> Arman Ahmed </span>| 05 Jul 2019
            </p>
            <p className="card-description">
              If you are a fresh graduate - or new to IT - looking for the next
              job, you need to read this. The last couple of years zekeLabs gave
              me a unique opportunity to...
            </p>
          </div>
        </div>
        <div className="card-1">
          <img
            src="https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_WxvDSK1.jpg"
            alt="card-1"
            className="card-img-1"
          />
          <div className="img-description">
            <p className="card-title">
              <b>Introducing you all to EdYoda -... </b>{" "}
            </p>
            <p className="name-date">
              <span className="name-link"> Arman Ahmed </span>| 05 Jul 2019
            </p>
            <p className="card-description">
            Really ecstatic and immensely proud to introduce you all to our latest attempt of adding value and making an impact to the world we are a part of....
            </p>
          </div>
        </div>
        <div className="card-1">
          <img
            src="https://edyoda.s3.amazonaws.com/media/blog-images/devops-edYoda-blog-small.jpg"
            alt="card-1"
            className="card-img-1"
          />
          <div className="img-description">
            <p className="card-title">
              <b>From identity crisis to the Success Story - Th...</b>
            </p>
            <p className="name-date">
              <span className="name-link"> Kalyan Mahalingam </span>| 05 Jul 2019
            </p>
            <p className="card-description">
            DevOps is a paradigm shift in the way how software products are being built in the modern day Information Technology (IT) organizations. It is becoming the...
            </p>
          </div>
        </div>
        <div className="card-1">
          <img
            src="https://edyoda.s3.amazonaws.com/media/blog-images/Data_Scientist_1920_1280_DsZBGZu.jpg"
            alt="card-1"
            className="card-img-1"
          />
          <div className="img-description">
            <p className="card-title">
              <b>Typical day of Data Scientist - An insider... </b>
            </p>
            <p className="name-date">
              <span className="name-link"> Saurav Ghosh</span>| 05 Jul 2019
            </p>
            <p className="card-description">
              If you are a fresh graduate - or new to IT - looking for the next
              job, you need to read this. The last couple of years zekeLabs gave
              me a unique opportunity to...
            </p>
          </div>
        </div>
        <div className="card-1">
          <img
            src="https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_blog_aws_cloudday_17may2018_Bangalore_small_ByulIE.jpg"
            alt="card-1"
            className="card-img-1"
          />
          <div className="img-description">
            <p className="card-title">
              <b>Amazon Web Services (AWS) Cloud Day -... </b>
            </p>
            <p className="name-date">
              <span className="name-link"> Kalyan Mahalingam </span>| 05 Jul 2019
            </p>
            <p className="card-description">
            It was indeed a hectic day with back to back session sandwiched by good food and tea (on a lighter note, need to investigate the tactics behind the 5-star hotels...

            </p>
          </div>
        </div>
        <div className="card-1">
          <img
            src="https://edyoda.s3.amazonaws.com/media/blog-images/cloud-meetup-edyoda-small_b2EXhBe.jpg"
            alt="card-1"
            className="card-img-1"
          />
          <div className="img-description">
            <p className="card-title">
              <b>edYoda Meetup #01 : A Date with Cloud</b>{" "}
            </p>
            <p className="name-date">
              <span className="name-link"> Ashish Pandey </span>| 05 Jul 2019
            </p>
            <p className="card-description">
            I recently had the opportunity to lead the initiative to organize the first Cloud meetup for edYoda. Here, I recount my experience in organizing the very first in the...
 
            </p>
          </div>
        </div>
        <div className="card-1">
          <img
            src="https://edyoda.s3.amazonaws.com/media/blog-images/pitanjal-industry-4-image-1.jpg"
            alt="card-1"
            className="card-img-1"
          />
          <div className="img-description">
            <p className="card-title">
              <b>Industry 4.0 - The Prospects & Journey... </b>
            </p>
            <p className="name-date">
              <span className="name-link"> Pitanjal Dutta </span>| 05 Jul 2019
            </p>
            <p className="card-description">
            Did you ever dream a world where computers are connected and will communicate with one another to ultimately make decisions without human...
            </p>
          </div>
        </div>
        <div className="card-1">
          <img
            src="https://edyoda.s3.amazonaws.com/media/blog-images/Copy_of_aptitude_1920_1280_LVmu25g.png"
            alt="card-1"
            className="card-img-1"
          />
          <div className="img-description">
            <p className="card-title">
              <b>Why do Database Systems Exist ? </b>
            </p>
            <p className="name-date">
              <span className="name-link"> Pitanjal Dutta </span>| 05 Jul 2019
            </p>
            <p className="card-description">
            Wondering why Database Management Systems like MySQL, NOSQL, MSSQL, Oracle SQL, MongoDB form the fundamental blocks behind...
            </p>
          </div>
        </div>
        <div className="card-1">
          <img
            src="https://edyoda.s3.amazonaws.com/media/blog-images/aptitude-small.jpg"
            alt="card-1"
            className="card-img-1"
          />
          <div className="img-description">
            <p className="card-title">
              <b>Master your General Aptitude Job Interview... </b>
            </p>
            <p className="name-date">
              <span className="name-link"> Pitanjal Dutta </span>| 05 Jul 2019
            </p>
            <p className="card-description">
            A general aptitude becomes very important, when you apply for a job in a tech company. You might be highly skilled in your subject domain. However, these basic...


            </p>
          </div>
        </div>
        <div className="card-1">
          <img
            src="https://edyoda.s3.amazonaws.com/media/blog-images/ace-soft-skills-small.jpg"
            alt="card-1"
            className="card-img-1"
          />
          <div className="img-description">
            <p className="card-title">
              <b>Ace your Soft Skills - Tips to crack the job...</b>
            </p>
            <p className="name-date">
              <span className="name-link"> Pitanjal Dutta  </span>| 05 Jul 2019
            </p>
            <p className="card-description">
            Soft skills are seen to be as important as your technical skill set. When an organisation is hiring, soft skills is given a lot of weightage and thus becomes a...


            </p>
          </div>
        </div>
        
     
      </div>


      
    </div>
  );
};
export default GridDesign;
