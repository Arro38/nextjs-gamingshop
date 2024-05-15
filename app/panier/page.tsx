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
import React, { useEffect, useState } from "react";
import { products as p } from "@/lib/data";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { MyDatePicker } from "@/components/MyDatePicker";

function Panier() {
  const [products, setProducts] = useState<
    { product: Product; quantity: number }[]
  >([]);
  const [total, setTotal] = useState(0);
  const [date, setDate] = React.useState<Date | undefined>();

  useEffect(() => {
    setProducts(p.slice(0, 2).map((product) => ({ product, quantity: 1 })));
  }, []);

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
        return setProducts(
          products.filter(({ product }) => product.id !== p.id)
        );
    } else {
      setProducts(
        products.map(({ product, quantity }) => {
          if (product.id === p.id) {
            return { product, quantity: quantity - 1 };
          }
          return { product, quantity };
        })
      );
    }
  };

  const handlePlus = (p: Product) => {
    setProducts(
      products.map(({ product, quantity }) => {
        if (product.id === p.id) {
          return { product, quantity: quantity + 1 };
        }
        return { product, quantity };
      })
    );
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
        </div>
      </CardContent>
      <CardFooter className="flex-col">
        <div className="flex justify-between space-x-2 ml-auto">
          <p className="text-lg font-semibold">Total : </p>
          <p className="text-lg font-semibold">{total} €</p>
        </div>
        <AlertDialog>
          <AlertDialogTrigger>
            <Button className="ml-auto">Commander</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Paiement de votre commande</AlertDialogTitle>
              <AlertDialogDescription>
                {/* Stripe information */}
                <form
                  className="flex flex-col space-y-2 "
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <div className="flex gap-2">
                    <Input type="text" placeholder="Nom" name="name" />
                    <Input type="text" placeholder="Prénom" name="firstname" />
                  </div>

                  <Input type="email" placeholder="Email" name="email" />
                  <Input
                    type="text"
                    placeholder="Numéro de carte"
                    name="cardNumber"
                  />
                  <div className="flex gap-2">
                    <Input
                      type="text"
                      placeholder="Date d'expiration"
                      name="expirationDate"
                    />
                    <Input
                      type="text"
                      placeholder="Code de sécurité"
                      name="securityCode"
                    />
                  </div>
                  {/* Total */}
                  <p className="text-lg font-semibold mx-auto">
                    Total : {total} €
                  </p>
                  {/* <MyDatePicker date={date} setDate={setDate} /> */}
                  <Button type="submit">Payer avec Stripe </Button>
                </form>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Annuler</AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </CardFooter>
    </Card>
  );
}

export default Panier;
