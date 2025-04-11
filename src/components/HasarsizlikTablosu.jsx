import React from "react";
import "./HasarsizlikTablosu.css";

const HasarsizlikTablosu = () => {
  return (
    <div className="hasarsizlik-container">
      <h2 className="hasarsizlik-baslik">
        🏷️Trafik Sigortası Hasarsızlık İndirimi
      </h2>
      <p className="tarih">27 Kasım 2024</p>
      <div className="hasarsizlik-table-wrapper">
        <table className="hasarsizlik-tablo">
          <thead>
            <tr>
              <th>Yıl</th>
              <th>Basamak No</th>
              <th>Hasarsızlık İndirimi (%)</th>
              <th>Prim Arttırımı (%)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>5</td>
              <td>8</td>
              <td>50</td>
              <td>-</td>
            </tr>
            <tr>
              <td>4</td>
              <td>7</td>
              <td>40</td>
              <td>-</td>
            </tr>
            <tr>
              <td>3</td>
              <td>6</td>
              <td>20</td>
              <td>-</td>
            </tr>
            <tr>
              <td>2</td>
              <td>5</td>
              <td>5</td>
              <td>-</td>
            </tr>
            <tr>
              <td>1</td>
              <td>4</td>
              <td>-</td>
              <td>10</td>
            </tr>
            <tr>
              <td>2</td>
              <td>3</td>
              <td>-</td>
              <td>45</td>
            </tr>
            <tr>
              <td>3</td>
              <td>2</td>
              <td>-</td>
              <td>90</td>
            </tr>
            <tr>
              <td>4</td>
              <td>1</td>
              <td>-</td>
              <td>135</td>
            </tr>
            <tr>
              <td>5</td>
              <td>0</td>
              <td>-</td>
              <td>200</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HasarsizlikTablosu;
