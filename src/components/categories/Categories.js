import React from "react";
import { Link } from "react-router-dom";


export default function CategoriesPage() {
 
  const imageBaseUrl = "https://images.unsplash.com/photo-";
  const imageParameters = "?auto=format&fit=crop&w=375&q=80";
  const dataSource = [
    { category: "Teknoloji", imageId: "1478358161113-b0e11994a36b" },
    { category: "Spor", imageId: "1521412644187-c49fa049e84d" },
    { category: "Sağlık", imageId: "1526256262350-7da7584cf5eb" },
    { category: "Ekonomi", imageId: "1542222024-c39e2281f121" },
    { category: "Eğitim", imageId: "1503676260728-1c00da094a0b" },
    { category: "Müzik", imageId: "1511671782779-c97d3d27a1d4" },
    { category: "Tiyatro", imageId: "1507924538820-ede94a04019d" },
    { category: "Sinema", imageId: "1478720568477-152d9b164e26" },
    { category: "Hava", imageId: "1530908295418-a12e326966ba" },
    { category: "Seyahat", imageId: "1473625247510-8ceb1760943f" },
    { category: "Astroloji", imageId: "1532968961962-8a0cb3a2d4f5" },
    { category: "Otomobil", imageId: "1537041373298-55dbb337e651" },
    { category: "Galeri", imageId: "1500051638674-ff996a0ec29e" },
    { category: "Video", imageId: "1524253482453-3fed8d2fe12b" },
  ];
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <ul style={{ display: "flex", flexWrap: "wrap", maxWidth: "400px" }}>
        {dataSource.map((item) => (
          <li key={item.category}>
            <Link to={"/category/" + item.category}>
              <div className="cat-img-box">
                <h4 className="category-title">{item.category}</h4>
                <img
                  src={imageBaseUrl + item.imageId + imageParameters}
                  alt={item.category}
                ></img>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}