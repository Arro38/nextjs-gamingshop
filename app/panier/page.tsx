"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  CardTitle,
  //   CardDescription,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import React, { use, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
// import { MyDatePicker } from "@/components/MyDatePicker";
import { Product } from "@prisma/client";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useStore } from "zustand";
import { useOrderStore } from "@/store/orderStore";

function Panier() {
  // const [products, setProducts] = useState<
  //   { product: Product; quantity: number }[]
  // >([]);
  const { products, addProduct, removeProduct, clearProducts } = useStore(
    useOrderStore,
    (state) => state
  );
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      products.reduce(
        (acc, { product, quantity }) => acc + product.price * quantity,
        0
      )
    );
  }, [products]);

  const handleMinus = (p: Product) => {
    if (products.find(({ product }) => product.id === p.id)?.quantity === 1) {
      if (window.confirm("Voulez-vous vraiment supprimer ce produit ?"))
        removeProduct(p.id);
    } else {
      addProduct(p, -1);
    }
    setTotal(
      products.reduce(
        (acc, { product, quantity }) => acc + product.price * quantity,
        0
      )
    );
  };

  const handlePlus = (p: Product) => {
    addProduct(p, 1);
    setTotal(
      products.reduce(
        (acc, { product, quantity }) => acc + product.price * quantity,
        0
      )
    );
  };

  const handleClear = () => {
    if (window.confirm("Voulez-vous vraiment vider le panier ?")) {
      clearProducts();
      setTotal(0);
    }
  };

  const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!;
  const stripePromise = loadStripe(publishableKey);
  const createCheckOutSession = async () => {
    const stripe = await stripePromise;
    const checkoutSession = await axios.post("/api/create-stripe-session", {
      products: products,
    });
    console.log(checkoutSession);
    const result = await stripe!.redirectToCheckout({
      sessionId: checkoutSession.data.sessionId,
      // sessionId:
      //   "cs_test_a1zDs595mjvvM6Uh3OaMXSsimCEvWpCWrteLk6vD8Q11BrPS7Z7zAXek2i",
    });
    if (result.error) {
      alert(result.error.message);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Panier</CardTitle>
        {/* <CardDescription></CardDescription> */}
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {products.map(({ product, quantity }) => (
            <div key={product.id} className="flex items-center">
              <Avatar className="h-9 w-9">
                <AvatarImage src={product.cover} alt={product.name} />
                <AvatarFallback>{product.name[0]}</AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">
                  {product.name}
                </p>
                <p className="text-sm text-muted-foreground">{product.price}</p>
              </div>
              {/* quantity */}

              <div className="ml-auto font-medium">
                <div className="flex items-center space-x-4">
                  <button
                    className="text-2xl"
                    onClick={() => handleMinus(product)}
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button
                    className="text-2xl"
                    onClick={() => handlePlus(product)}
                  >
                    +
                  </button>
                </div>
                {product.price} €
              </div>
            </div>
          ))}
          <Button onClick={handleClear}>Vider le panier</Button>
        </div>
      </CardContent>
      <CardFooter className="flex-col">
        <div className="flex justify-between space-x-2 ml-auto">
          <p className="text-lg font-semibold">Total : </p>
          <p className="text-lg font-semibold">{total} €</p>
          <Button onClick={createCheckOutSession}>Payer avec Stripe</Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default Panier;
