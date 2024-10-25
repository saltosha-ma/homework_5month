import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFacts } from '../redux/actions/factActions';

const Facts = () => {
  const dispatch = useDispatch();
  const { facts, loading, error } = useSelector((state) => state.facts);

  useEffect(() => {
    dispatch(fetchFacts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Random Fact</h1>
      <p>{facts}</p>
      <button onClick={() => dispatch(fetchFacts())}>Get Another Fact</button>
    </div>
  );
};

export default Facts;
