import React from 'react';
import { useParams } from 'react-router-dom';
import property1 from "../../assets/images/property-1.jpg";
import property2 from "../../assets/images/property-2.jpg";
import property3 from "../../assets/images/property-3.jpg";
import './PropertyDetail.css'; // optional for styling

const properties = [
  {
    id: 1,
    image: property1,
    title: "Oceanview Penthouse",
    location: "Miami Beach, FL",
    price: "$4,200/mo",
    status: "Occupied",
    bedrooms: 3,
    bathrooms: 2.5,
    area: "2,400 sqft",
    description: "Enjoy stunning views of the ocean with floor-to-ceiling windows.",
  },
  {
    id: 2,
    image: property2,
    title: "Downtown Loft",
    location: "New York, NY",
    price: "$5,500/mo",
    status: "Available",
    bedrooms: 2,
    bathrooms: 2,
    area: "1,800 sqft",
    description: "Modern loft located in the heart of the city.",
  },
  {
    id: 3,
    image: property3,
    title: "Hillside Villa",
    location: "Beverly Hills, CA",
    price: "$8,000/mo",
    status: "Maintenance",
    bedrooms: 4,
    bathrooms: 3.5,
    area: "3,200 sqft",
    description: "Private hillside villa with a pool and garden.",
  },
];

function PropertyDetail() {
  const { id } = useParams();
  const property = properties.find((p) => p.id === parseInt(id));

  if (!property) return <p>Property not found.</p>;

  return (
    <div className="property-detail">
      <h2>{property.title}</h2>
      <img src={property.image} alt={property.title} className="property-image-large" />
      <p><strong>Location:</strong> {property.location}</p>
      <p><strong>Price:</strong> {property.price}</p>
      <p><strong>Status:</strong> {property.status}</p>
      <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
      <p><strong>Bathrooms:</strong> {property.bathrooms}</p>
      <p><strong>Area:</strong> {property.area}</p>
      <p><strong>Description:</strong> {property.description}</p>
    </div>
  );
}

export default PropertyDetail;
