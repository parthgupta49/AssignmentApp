import React from "react";
import { HeroParallax } from "../ui/hero-parallax";

 const  HeroParallaxDemo  = () => {
    return <HeroParallax products={products} />;
}

export const products = [
    {
        title: "Elegant Chesterfield Sofa",
        thumbnail: "https://www.badakar.com/assets/img/f8a2c9d5-2a51-4dc7-a954-245a3839ec46Design%20and%20build,%20a%20superior%20method%20for%20corporate%20fitouts.jpg?h=9119516b4398422daebb1cac6c5ad1e4",
    },
    {
        title: "Rustic Farmhouse Table",
        thumbnail: "https://plus.unsplash.com/premium_photo-1670076513880-f58e3c377903?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnVybml0dXJlfGVufDB8fDB8fHww",
    },
    {
        title: "Art Deco Lighting Fixture",
        thumbnail: "https://plus.unsplash.com/premium_photo-1684338795288-097525d127f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnVybml0dXJlfGVufDB8MHwwfHx8MA%3D%3D",
    },
    {
        title: "Contemporary Accent Chair",
        thumbnail: "https://plus.unsplash.com/premium_photo-1683140425081-14c44089acd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZ1cm5pdHVyZXxlbnwwfDB8MHx8fDA%3D",
    },
    {
        title: "Scandinavian Coffee Table",
        thumbnail: "https://images.unsplash.com/photo-1614723279217-f0a7f7f38405?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxyZWFsJTIwZXN0YXRlfGVufDB8fDB8fHww",
    },
    {
        title: "Vintage Bookshelf",
        thumbnail: "https://images.unsplash.com/photo-1668910228772-db1d7e99540a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjEyfHxyZWFsJTIwZXN0YXRlfGVufDB8fDB8fHww",
    },
    {
        title: "Modern Minimalist Chair",
        thumbnail: "https://www.badakar.com/assets/img/002e8434382ce01d1f2db2b23f304902.png?h=5446b765be10844f188d77559c3ce528",
    },
    {
        title: "Luxury Bed Frame",
        thumbnail: "https://plus.unsplash.com/premium_photo-1677782975062-56111703e90e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHxyZWFsJTIwZXN0YXRlfGVufDB8fDB8fHww",
    },
    {
        title: "Stylish Dining Set",
        thumbnail: "https://plus.unsplash.com/premium_photo-1681224438794-f63e754bf542?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YW5pbWFscyUyMGF0JTIwaG9tZSUyMGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        title: "Chic Lounge Chair",
        thumbnail: "https://images.unsplash.com/photo-1546551613-09c2f83e1ede?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D",
    },
    {
        title: "Modern Office Desk",
        thumbnail: "https://images.unsplash.com/photo-1560185127-2d06c6d08d3d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D",
    },
    {
        title: "Sleek TV Stand",
        thumbnail: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D",
    },
    {
        title: "Luxury Home Office Setup",
        thumbnail: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        title: "Elegant Outdoor Furniture",
        thumbnail: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        title: "Artistic Wall Decor",
        thumbnail: "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D",
    },
];
export default HeroParallaxDemo
