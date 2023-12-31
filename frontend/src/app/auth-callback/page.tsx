"use client";
import { Loader2 } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

// import { trpc } from "../_trpc/client"

const Page = () => {
	const router = useRouter();

	const searchParams = useSearchParams();
	const origin = searchParams.get("origin");

	console.log(origin);
	useEffect(() => {
		const timeOut = setTimeout(() => {
			router.push(origin ? `/${origin}` : "/dashboard");
		}, 3000);

		return () => {
			clearTimeout(timeOut);
		};
	}, []);

	// trpc.authCallback.useQuery(undefined, {
	//   onSuccess: ({ success }) => {
	//     if (success) {
	//       // user is synced with the database
	//       router.push(origin ? `/${origin}` : "/dashboard")
	//     }
	//   },
	//   onError: (err) => {
	//     if (err.data?.code === "UNAUTHORIZED") {
	//       router.push("/sign-in")
	//     }
	//   },
	//   retry: true,
	//   retryDelay: 500,
	// })

	return (
		<div className="w-full mt-24 flex justify-center">
			<div className="flex flex-col items-center gap-2">
				<Loader2 className="h-8 w-8 animate-spin text-zinc-800" />
				<h3 className="font-semibold text-xl">Setting up your account...</h3>
				<p>You will be redirected automatically.</p>
			</div>
		</div>
	);
};

export default Page;
