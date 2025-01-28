// components/PerfumeList.tsx
import React from "react";
import styles from './components.module.css';


type Perfume = {
  id: number;
  house: string;
  name: string;
  description: string;
  price: number;
  stock: number;
};

type PerfumeListProps = {
  perfumes: Perfume[];
};

const PerfumeList: React.FC<PerfumeListProps> = ({ perfumes }) => {

  const armafPerfumes = perfumes.filter((perfume) => perfume.house === "Armaf");
  const diorPerfumes = perfumes.filter((perfume) => perfume.house === "Dior");


  return (
    <div>
      <div className={styles.carrusel}>
        {armafPerfumes.map((perfume) => (
          <article key={perfume.id} className={styles.card}>
            <h2>{perfume.name}</h2>
          </article>
        ))}
      </div>

      <div className={styles.carrusel}>
        {diorPerfumes.map((perfume) => (
          <article key={perfume.id} className={styles.card}>
            <h2>{perfume.name}</h2>
          </article>
        ))}
      </div>
    </div>
  );
};

export default PerfumeList;
