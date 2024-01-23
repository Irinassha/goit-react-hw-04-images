import React from 'react';
import { Button } from './button/Button';
import { Searchbar } from './searchbar/Searchbar';
import { ImageGallery } from 'components/imagegallery/ImageGallery';
import { ApiByPhoto } from 'servise/api';
import { Loader } from './loader/Loader';
import { Modal } from 'components/modal/Modal';

export class App extends React.Component {
  state = {
    items: [],
    page: 1,
    quary: '',
    loading: false,
    error: null,
    totalItems: 0,
    isOpen: false,
    modalContent: null,
  };

  async componentDidUpdate(_, prevState) {
    const { page, quary } = this.state;
    if (prevState.page !== page || prevState.quary !== quary) {
      try {
        this.setState({ loading: true, error: null });
        const { hits, total } = await ApiByPhoto({ quary, page });
        this.setState(prev => ({
          items: [...prev.items, ...hits],
          totalItems: total,
        }));
        
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  handlerSearch = quary => {
    this.setState({ quary, items: [], page: 1 });
  };

  handlerLoadMore = e => {
    e.preventDefault();
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  handlerModal = () => {
    this.setState(prev => ({ isOpen: !prev.isOpen }));
  };
  handlerModalOpen = content => {
    console.log(content);
    this.setState({ modalContent: content, isOpen: true });
  };

  handlerNextPost = id => {
    const { items } = this.state;
    const item = items.findIndex(modalContent => modalContent.id === id);
    if (item === items.length - 1) {
      this.setState({ modalContent: items[0] });
    } else {
      this.setState({ modalContent: items[item + 1] });
    }
  };

  handlerPrevPost = id => {
    const { items } = this.state;
    const item = items.findIndex(modalContent => modalContent.id === id);
    if (!item) {
      this.setState({ modalContent: items[items.length - 1] });
    } else {
      this.setState({ modalContent: items[item - 1] });
    }
  };

  render() {
    const { items, loading, totalItems, isOpen, modalContent } = this.state;
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Searchbar search={this.handlerSearch} />
        {loading ? (
          <Loader />
        ) : (
          <ImageGallery hits={items} handlerModalOpen={this.handlerModalOpen} />
        )}
        
        {items && items.length < totalItems && (
          <Button loadMore={this.handlerLoadMore} />
        )}
        {isOpen && (
          <Modal
            modalContent={modalContent}
            close={this.handlerModal}
            handlerNextPost={this.handlerNextPost}
            handlerPrevPost={this.handlerPrevPost}
          />
        )}
      </div>
    );
  }
}
