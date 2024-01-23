import PropagateLoader from 'react-spinners/ClipLoader';
import s from './Loader.module.css';
export const Loader = () => {
  return (
    <div className={s.loader}>
      <PropagateLoader
        cssOverride={{ width: '150px', height: '150px' }}
        color="rgba(79, 42, 137)"
      />
    </div>
  );
};
