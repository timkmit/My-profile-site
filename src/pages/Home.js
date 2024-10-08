import Header from "./../components/header/Header";

const Home = () => {
    return ( 
        <>
            <Header />

            <main className="section">
                <div className="container">

                        <ul className="content-list">
                            <li className="content-list__item">
                                <h2 className="title-2">Frontend</h2>
                                <p>JavaScript, TypeScript, React, Redux Toolkit, HTML, CSS, SCSS, Styled Components, Bootstrap, Material UI</p>
                            </li>
                            <li className="content-list__item">
                                <h2 className="title-2">Backend</h2>
                                <p>ExpressJS, NestJS, PostgreSQL, MySQL, MongoDB, Prisma ORM</p>
                            </li>
                            <li className="content-list__item">
                                <h2 className="title-2">Other</h2>
                                <p>Docker-compose, Linux, Nginx, Netlify, Vercel</p>
                            </li>
                        </ul>

                </div>
            </main>
      </>
     );
}
 
export default Home;
