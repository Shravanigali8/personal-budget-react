import React from  'react';

function HomePage() {
  return (
    <main>
    <section aria-labelledby="stay-on-track">
        <article>
            <h2 id="stay-on-track">Stay on Track</h2>
            <p>
                Do you know where you are spending your money? With proper budget tracking,
                you can achieve financial stability and reach your goals.
            </p>
        </article>
    </section>

    <section aria-labelledby="alerts">
        <article>
            <h2 id="alerts">Alerts</h2>
            <p>
                Stay updated with alerts if you're about to exceed your set budget. Never
                spend beyond your means.
            </p>
        </article>
    </section>

    <section aria-labelledby="results">
        <article>
            <h2 id="results">Results</h2>
            <p>
                Budgeting helps you get out of debt faster and live a guilt-free, happier life.
                Spend with confidence!
            </p>
        </article>
    </section>

    <section aria-labelledby="free">
        <article>
            <h2 id="free">Free</h2>
            <p>
                Enjoy a free app where you are in full control of your data. Start budgeting today!
            </p>
        </article>
    </section>

    <section aria-labelledby="chart">
        <article>
            <h2 id="chart">Chart</h2>
            <canvas id="myChart" width="400" height="400" aria-label="Budget Chart" role="img"></canvas>
        </article>
    </section>
    
    <h2 style={{ textAlign: "center" }}>D3.js Chart</h2>
    <div id="d3-chart" style={{ width: "100%", height: "400px" }}></div>

</main>

  );
}

export default HomePage;