// // import NextAuth from "next-auth";
// // import FacebookProvider from "next-auth/providers/facebook";
// // // import Providers from "next-auth/providers";
// // import GithubProvider from "next-auth/providers/github"


// // export default NextAuth({
// //     // config one or more authentication providers
// //     providers: [
// //         FacebookProvider({
// //           clientId: process.env.FACEBOOK_CLIENT_ID,
// //           clientSecret: process.env.FACEBOOK_CLIENT_SECRET
// //         })
// //       ]
// // });


// import NextAuth from 'next-auth'
// import AppleProvider from 'next-auth/providers/apple'
// import FacebookProvider from 'next-auth/providers/facebook'
// import GoogleProvider from 'next-auth/providers/google'
// import EmailProvider from 'next-auth/providers/email'

// export default NextAuth({
//   providers: [
//     // OAuth authentication providers...
//     // AppleProvider({
//     //   clientId: process.env.APPLE_ID,
//     //   clientSecret: process.env.APPLE_SECRET
//     // }),
//     // FacebookProvider({
//     //   clientId: process.env.FACEBOOK_CLIENT_ID,
//     //   clientSecret: process.env.FACEBOOK_CLIENT_SECRET
//     // }),
//     GoogleProvider({
//       clientId: process.env.GOOGLE_ID,
//       clientSecret: process.env.GOOGLE_SECRET
//     }),
//     // Passwordless / email sign in
//     // EmailProvider({
//     //   server: process.env.MAIL_SERVER,
//     //   from: 'NextAuth.js <no-reply@example.com>'
//     // }),
//   ],
//   pages: {
//     signIn: "/auth/signin"
//   }
// })
export {}
