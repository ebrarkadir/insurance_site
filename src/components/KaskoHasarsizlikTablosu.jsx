import React from "react";
import "./KaskoHasarsizlikTablosu.css";

const KaskoHasarsizlikTablosu = () => {
  return (
    <div className="kasko-hasarsizlik-container">
      <h2 className="kasko-hasarsizlik-baslik">Kasko Sigortası Hasarsızlık İndirimi</h2>
      <p className="kasko-tarih">{new Date().toLocaleDateString("tr-TR", {
        day: "2-digit",
        month: "long",
        year: "numeric"
      })}</p>
      <div className="kasko-hasarsizlik-table-wrapper">
        <table className="kasko-hasarsizlik-tablo">
          <thead>
            <tr>
              <th>Süre</th>
              <th>İndirim Oranı</th>
              <th>Hasarsızlık Basamağı</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>İlk kez kasko sigortası alındığında</td>
              <td>0%</td>
              <td>0</td>
            </tr>
            <tr>
              <td>İlk 12 aylık kasko poliçesi süresi sonunda kazasız yenilemede</td>
              <td>30%</td>
              <td>1</td>
            </tr>
            <tr>
              <td>İkinci 12 aylık kasko poliçesi süresi sonunda kazasız yenilemede</td>
              <td>40%</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Üçüncü 12 aylık kasko poliçesi süresi sonunda kazasız yenilemede</td>
              <td>50%</td>
              <td>3</td>
            </tr>
            <tr>
              <td>Dördüncü 12 aylık kasko poliçesi süresi sonunda kazasız yenilemede</td>
              <td>60%</td>
              <td>4</td>
            </tr>
            <tr>
              <td>Beşinci 12 aylık kasko poliçesi süresi sonunda kazasız yenilemede</td>
              <td>65%</td>
              <td>5</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default KaskoHasarsizlikTablosu;
