export const getStaticProps: GetStaticProps = async () => {

    // make API request
    const request = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await request.json()


    return {
        props: {
            data
        }
    };
}