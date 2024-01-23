import s from './ImageGalleryItem.module.css';
export const ImageGalleryItem = ({ item, handlerModalOpen }) => {
  return (
    <li className={s.galleryItem} onClick={() => handlerModalOpen(item)}>
      <img className={s.itemImg} src={item.webformatURL} alt={item.tags} />
    </li>
  );
};
