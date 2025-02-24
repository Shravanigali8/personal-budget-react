import React from "react";
import ChartJS from "../ChartJS/ChartJS";
import D3JSChart from "../D3JSChart/D3JSChart";

function HomePage() {
    const sampleChartData = {
      labels: ["Food", "Rent", "Entertainment", "Transport"],
      datasets: [
        {
          label: "Budget Allocation",
          data: [500, 1000, 300, 200],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
        },
      ],
    };
  
    const d3JSData = [
      { label: "Food", budget: 500 },
      { label: "Rent", budget: 1000 },
      { label: "Entertainment", budget: 300 },
      { label: "Transport", budget: 200 },
    ];

    return (
      <main className="center" id="main">

      <div className="page-area">

          <article>
              <h1>Stay on track</h1>
              <p>
                  Do you know where you are spending your money? If you really stop to track it down,
                  you would get surprised! Proper budget management depends on real data... and this
                  app will help you with that!
              </p>
          </article>
  
          <article>
              <h1>Alerts</h1>
              <p>
                  What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
              </p>
          </article>
  
          <article>
              <h1>Results</h1>
              <p>
                  People who stick to a financial plan, budgeting every expense, get out of debt faster!
                  Also, they to live happier lives... since they expend without guilt or fear... 
                  because they know it is all good and accounted for.
              </p>
          </article>
  
          <article>
              <h1>Free</h1>
              <p>
                  This app is free!!! And you are the only one holding your data!
              </p>
          </article>
  
          <article>
              <h1>Stay on track</h1>
              <p>
                  Do you know where you are spending your money? If you really stop to track it down,
                  you would get surprised! Proper budget management depends on real data... and this
                  app will help you with that!
              </p>
          </article>
  
          <article>
              <h1>Alerts</h1>
              <p>
                  What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
              </p>
          </article>
  
          <article>
          <h1>Chart</h1>
          <ChartJS chartData={sampleChartData} />
        </article>
        <article>
          <h1>D3JS Chart</h1>
          <D3JSChart d3JSDataSource={d3JSData} />
        </article>
      </div>
    </main>
    );
  }
  
  export default HomePage;
  