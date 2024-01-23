// import s from './Button.module.css'
import s from './Button.module.css';
export const Button = ({ loadMore }) => {
  return (
    <button onClick={loadMore} className={s.Button}>
      Load more
    </button>
  );
};
