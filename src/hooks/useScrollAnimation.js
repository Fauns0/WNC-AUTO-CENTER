import { useEffect, useRef } from 'react';

function useScrollAnimation() {
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Se o elemento está visível, adiciona a classe
            entry.target.classList.add('is-visible');
          } else {
            // Se o elemento não está visível, remove a classe
            entry.target.classList.remove('is-visible');
          }
        });
      },
      {
        threshold: 0.1, // A animação começa quando 10% do elemento está visível
      }
    );

    elementsRef.current.forEach((el) => {
      if (el) {
        observer.observe(el);
      }
    });

    // Função de "limpeza" que executa quando o componente é desmontado
    return () => {
      elementsRef.current.forEach((el) => {
        if (el) {
          observer.unobserve(el);
        }
      });
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  return addToRefs;
}

export default useScrollAnimation;