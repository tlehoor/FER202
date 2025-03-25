// src/components/ProductManagementForm.js
import React, { useState, useEffect } from 'react';
import { Button, Form, Modal, Alert, Card, Row, Col } from 'react-bootstrap';

function ProductManagementForm() {
    const [products, setProducts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [product, setProduct] = useState({
      name: '',
      category: '',
      price: '',
      stock: '',
      description: '',
      image: ''
    });
    const [editMode, setEditMode] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch('http://localhost:3000/Products');
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };



    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setProduct({ ...product, [name]: value });
    };

      const openAddModal = () => {
        setProduct({ name: '', category: '', price: '', stock: '', description: '', image: '' }); // Reset form
        setEditMode(false);
        setShowModal(true);
      };

      const handleAddProduct = async () => {
        try {
            const response = await fetch('http://localhost:3000/Products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            });
            if (response.ok) {
                fetchProducts(); // Refresh the product list
                setShowModal(false); // Close the modal
                setShowAlert(true); // Show success alert
                setTimeout(()=> setShowAlert(false), 3000)
            } else {
                console.error("Failed to add product");
            }
        } catch (error) {
            console.error("Error adding product:", error);
        }
    };

    const openEditModal = (productToEdit) => {
      setProduct(productToEdit);  // Populate the form with existing data
      setEditMode(true);
      setShowModal(true);
    };

    const handleUpdateProduct = async () => {
      try {
          const response = await fetch(`http://localhost:3000/Products/${product.id}`, {
              method: 'PUT',  // Use PUT for updates
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(product)
          });

          if (response.ok) {
              fetchProducts();
              setShowModal(false);
              setShowAlert(true); // Show success alert
              setTimeout(()=> setShowAlert(false), 3000)
          } else {
              console.error("Failed to update product");
          }
      } catch (error) {
          console.error("Error updating product:", error);
      }
    };

    const handleDeleteProduct = async (productId) => {
      if (window.confirm("Are you sure you want to delete this product?")) {
          try {
              const response = await fetch(`http://localhost:3000/Products/${productId}`, {
                  method: 'DELETE'
              });

              if (response.ok) {
                  fetchProducts();
              } else {
                  console.error("Failed to delete product");
              }
          } catch (error) {
              console.error("Error deleting product:", error);
          }
      }
    };


    return (
        <div className="container mt-5">
            <h2>Product List</h2>
            <Button variant="success" onClick={openAddModal} className="mb-3">Add Product</Button>
            {showAlert && <Alert variant="success">Operation Successful!</Alert>}

            <Row xs={1} md={2} lg={3} className="g-4">
                {products.map(p => (
                    <Col key={p.id}>
                        <Card>
                            <Card.Img variant="top" src={p.image} alt={p.name} style={{objectFit: "cover", height:"200px"}} />
                            <Card.Body>
                                <Card.Title>{p.name}</Card.Title>
                                <Card.Text>{p.description}</Card.Text>
                                <Card.Text><strong>Price:</strong> {p.price}</Card.Text>
                                 <Card.Text><strong>Stock:</strong> {p.stock}</Card.Text>
                                <Button variant="primary" size="sm" onClick={() => openEditModal(p)}>Edit</Button>{' '}
                                <Button variant="danger" size="sm" onClick={() => handleDeleteProduct(p.id)}>Delete</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>


            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{editMode ? 'Edit Product' : 'Add Product'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="name" value={product.name} onChange={handleInputChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Category</Form.Label>
                            <Form.Control type="text" name="category" value={product.category} onChange={handleInputChange} required/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="text" name="price" value={product.price} onChange={handleInputChange} required/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Stock</Form.Label>
                            <Form.Control type="number" name="stock" value={product.stock} onChange={handleInputChange} required/>
                        </Form.Group>
                         <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} name="description" value={product.description} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Image URL</Form.Label>
                            <Form.Control type="text" name="image" value={product.image} onChange={handleInputChange} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={editMode? handleUpdateProduct : handleAddProduct}>
                        {editMode ? 'Update' : 'Add'}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ProductManagementForm;