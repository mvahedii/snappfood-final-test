import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getVendors} from '../../store/actions/vendors';
import {RootState} from '../../store/reducers/rootReducer';
import {Card, Spinner} from '../../components';
import './style.scss';

export const Vendors = () => {
  const dispatch = useDispatch();
  const [pageNum, setPageNum] = useState(0);
  const [lastElement, setLastElement] = useState<HTMLDivElement | null>(null);
  const {totalNumberOfVendors, restaurants, isLoading} = useSelector(
    (state: RootState) => state.vendorsStore,
  );
  const observer = useRef(
    new IntersectionObserver((entries) => {
      const first = entries[0];
      if (first.isIntersecting) {
        setPageNum((no) => no + 1);
      }
    }),
  );

  useEffect(() => {
    if (pageNum <= Math.ceil(totalNumberOfVendors / 10)) {
      dispatch(getVendors(pageNum));
    }
  }, [pageNum]);

  useEffect(() => {
    const currentElement = lastElement;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [lastElement]);

  return (
    <>
      {Object.entries(restaurants).map((restaurant, index) => {
        return (
          <div
            className="card_wrapper"
            ref={setLastElement}
            key={restaurant[1].id}
          >
            <Card
              coverImage={restaurant[1].backgroundImage}
              logoImage={restaurant[1].logo}
              title={restaurant[1].title}
              description={restaurant[1].description}
              deliveryFee={restaurant[1].deliveryFee}
            />
          </div>
        );
      })}
      {isLoading && <Spinner />}

      {!isLoading && pageNum <= Math.ceil(totalNumberOfVendors / 10) && (
        <div ref={setLastElement} style={{background: 'transparent'}}></div>
      )}
    </>
  );
};
