import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getVendors} from '../../store/actions/vendors';
import {RootState} from '../../store/reducers/rootReducer';

export const Vendors = () => {
  const dispatch = useDispatch();
  const [pageNum, setPageNum] = useState(0);
  const [lastElement, setLastElement] = useState(null);

  const vendorsState = useSelector((state: RootState) => state.vendorsStore);

  const observer = useRef(
    new IntersectionObserver((entries) => {
      const first = entries[0];
      if (first.isIntersecting) {
        setPageNum((no) => no + 10);
      }
    }),
  );

  useEffect(() => {
    if (pageNum <= vendorsState.totalNumberOfVendors) {
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

  return <> </>;
};
