import { Product } from "@prisma/client";
import { NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(req: Request) {
  const { products }: { products: { product: Product; quantity: number }[] } =
    await req.json();

  const redirectURL = "http://localhost:3000";
  // process.env.NODE_ENV === "development"
  //   ? "http://localhost:3000"
  //   : "https://stripe-checkout-next-js-demo.vercel.app";
  const items = products.map(async ({ product, quantity }) => {
    return {
      price_data: {
        currency: "eur",
        product_data: {
          images: [product.cover],
          name: product.name,
        },
        unit_amount: product.price * 100,
      },
      quantity: quantity,
    };
  });

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: await Promise.all(items),
    mode: "payment",
    success_url: redirectURL + "?status=success",
    cancel_url: redirectURL + "?status=cancel",
    // metadata: {
    //   images: item.cover,
    // },
  });

  return NextResponse.json({ sessionId: session.id }, { status: 200 });
}
