import s from './Modal.module.css';
import React from 'react';

export class Modal extends React.Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handlerKyeClouse);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handlerKyeClouse);
  }

  handlerKyeClouse = e => {
    if (e.code === 'Escape') {
      this.props.close('');
    } else {
      this.props.close('');
    }
  };

  handlerPrevNext = e => {
    e.stopPropagation();

    const { handlerPrevPost, modalContent, handlerNextPost } = this.props;
    if (e.target.textContent === 'Prev') {
      handlerPrevPost(modalContent.id);
    }
    if (e.target.textContent === 'Next') {
      handlerNextPost(modalContent.id);
    }
  };

  render() {
    const { modalContent } = this.props;
    return (
      <div className={s.Overlay} onClick={this.handlerKyeClouse}>
        <button className={s.Btn} type="button" onClick={this.handlerPrevNext}>
          Prev
        </button>

        <div className={s.Modal}>
          <img
            onClick={(e) => e.stopPropagation()}
            className={s.img}
            src={modalContent.largeImageURL}
            alt={modalContent.tags}
          />
        </div>
        <button className={s.Btn} type="button" onClick={this.handlerPrevNext}>
          Next
        </button>
      </div>
    );
  }
}
