import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';
import Meta from '../components/Meta';
import Filter from '../components/Filter';
import DropFilter from '../components/dropFilter';

const HomeScreen = () => {
  const { pageNumber, keyword } = useParams();
  const { data, isLoading, error } = useGetProductsQuery({
    keyword,
    pageNumber,
  });

  // Filter state
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  // Ensure data is not undefined before accessing products
  const filteredProducts = data?.products
    ? data.products.filter((product) => {
        const productPrice = parseFloat(product.price);
        const isPriceInRange =
          (!minPrice || productPrice >= parseFloat(minPrice)) &&
          (!maxPrice || productPrice <= parseFloat(maxPrice));
        return isPriceInRange;
      })
    : [];

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <Meta />
          <Row>
            <Col md={3}> {/* Adjust the column width as needed */}
              {/* Place the filter controls on the left side */}
              <div>
                <h3>Filters</h3>
                <h5>Price</h5>
                <Filter
                  minPrice={minPrice}
                  maxPrice={maxPrice}
                  setMinPrice={setMinPrice}
                  setMaxPrice={setMaxPrice}
                /><br/>
                <h5>Category</h5>
                <DropFilter />
              </div>
            </Col>
            <Col md={9}> {/* Adjust the column width as needed */}
              {/* Place the product listings on the right side */}
              <div>
                <h1>Latest Products</h1>
                <Row>
                  {filteredProducts.map((product) => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                      <Product product={product} />
                    </Col>
                  ))}
                </Row>
                <Paginate
                  pages={data.pages}
                  page={data.page}
                  keyword={keyword ? keyword : ''}
                />
              </div>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default HomeScreen;
