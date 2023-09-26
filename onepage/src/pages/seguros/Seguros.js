import React from "react";
import NavBar from "../../components/NavBar.js";
import { PowerBIEmbed } from "powerbi-client-react";
import { models } from 'powerbi-client';
import "./Seguros.css"

const Seguros = () => {
  return (
    <div>
      <h1>Seguros</h1>
      <NavBar></NavBar>
      <div className="powerbi">
      <PowerBIEmbed
        embedConfig={{
          type: "report", // Supported types: report, dashboard, tile, visual and qna
          id: "4d77d885-f3ae-4aab-9d09-580c53c12626",
          embedUrl:
          "https://app.powerbi.com/reportEmbed?reportId=4d77d885-f3ae-4aab-9d09-580c53c12626&groupId=f5009354-a5b4-4eef-bcd6-c7e7f1465334&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUJSQVpJTC1TT1VUSC1CLVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7InVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlLCJkaXNhYmxlQW5ndWxhckpTQm9vdHN0cmFwUmRsRW1iZWQiOnRydWV9fQ%3d%3d",
          accessToken:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMjlhZmE1YjAtMjNmYi00MDNmLWEwM2UtMmFkZTRkZTkzMWFmLyIsImlhdCI6MTY5NTY2MjIzMCwibmJmIjoxNjk1NjYyMjMwLCJleHAiOjE2OTU2NjYzMjQsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VUFBQUExcVhhSE43UGtLM1pPZlorcjFsbk1HYlZkbjFoRFhDU0s1UExtdFJsZHpKZE5sa0hVUUpGZGlwYnNWUzZYWDRZIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiR2VzdMOjbyIsImdpdmVuX25hbWUiOiJTZXJ2acOnb3MiLCJpcGFkZHIiOiIyODA0OjRkOTg6MjUxOmNkMDA6ZmQwOToyMGNiOjQ0ZjI6YzI3ZiIsIm5hbWUiOiJTZXJ2acOnb3MgRmluYW5jZWlyb3MgR2VzdMOjbyIsIm9pZCI6ImZjZTY2N2FiLWY4ZWMtNGIzYi04MDc2LTc0MTZhYTE5N2FlZCIsInB1aWQiOiIxMDAzMjAwMjE5ODZBQzJGIiwicmgiOiIwLkFRb0FzS1d2S2ZzalAwQ2dQaXJlVGVreHJ3a0FBQUFBQUFBQXdBQUFBQUFBQUFBS0FFay4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzdWIiOiJsYUZ2cG81MktaM29VVkpQeHVaaVh0U3BtbVNXbDJ6N2JwTWw1TVUzVUhvIiwidGlkIjoiMjlhZmE1YjAtMjNmYi00MDNmLWEwM2UtMmFkZTRkZTkzMWFmIiwidW5pcXVlX25hbWUiOiJzZXJ2aWNvcy5nZXN0YW9ATG9qYXNxdWVyb3F1ZXJvLm9ubWljcm9zb2Z0LmNvbSIsInVwbiI6InNlcnZpY29zLmdlc3Rhb0BMb2phc3F1ZXJvcXVlcm8ub25taWNyb3NvZnQuY29tIiwidXRpIjoiNlY2RjFrektNa2k1SHI4cWRYX0pBUSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il19.KKLEul1y3Sp0dRE3_YLoVWBffxOgMxaOSyhH5_-ALxfUL_hzKnHCiH_q4GpjG_-pWQc39li1VrW2hdsBVxA3vgq7-H6V2TcvS9Tgc7Pn0lL6ht_G95bo5l61QdAit83t5XvGY4W4lv5lfi-OHZNFCqVOjCLbPNulghx_EyPU0SPKRyqiQF19QoZYShAEdPhOo4rOg96ciT2uXF7M9NRknccPAZjz0WlSgLFrCpq5XX24dUHoRMi8qf6WK0sqdiiCqHWA3O61X1-o-k96JLncA-CVNIVmwhA6EALvoQOU-zv812q6gIN79VRnQtGk4v8Pvj90h_-p3dZRe0LhcHLtTg",
          tokenType: models.TokenType.Aad,
          settings: {
            panes: {
              filters: {
                expanded: false,
                visible: true,
              },
            },
          },
        }}
        eventHandlers={
          new Map([
            [
              "loaded",
              function () {
                console.log("Report loaded");
              },
            ],
            [
              "rendered",
              function () {
                console.log("Report rendered");
              },
            ],
            [
              "error",
              function (event) {
                console.log(event.detail);
              },
            ],
          ])
        }
        cssClassName={"Embed-container"}
        getEmbeddedComponent={(embeddedReport) => {
          window.report = embeddedReport;
        }}
      />
      </div>
    </div>
  );
};

export default Seguros;
