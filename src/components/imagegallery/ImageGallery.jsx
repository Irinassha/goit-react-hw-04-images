import { ImageGalleryItem } from 'components/imagegalleryitem/ImageGalleryItem';
import s from './ImageGallery.module.css';

export const ImageGallery = ({ hits, handlerModalOpen }) => {
  return (
    <ul className={s.gallery}>
      {hits.map(item => {
        return (
          <ImageGalleryItem
            key={item.id}
            item={item}
            handlerModalOpen={handlerModalOpen}
          />
        );
      })}
    </ul>
  );
};
