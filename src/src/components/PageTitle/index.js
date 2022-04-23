import PageTitle from "./PageTitle";

/* 
    Look at creating components
    Styles css modules csss....
    Look at props
    Data Integration Techniques....
*/

function Product({title, ...props}) {
    return <li>{title}</li>
}

export default function Home() {
    // Building UI from data
    const productData = [{name: "Nike", uid:1}, {name: "New Balance", uid:2}];
    return (
        <>
            <PageTitle title="StoreFront" tagline = "featured products"/>
            <div style={{textAlign:"center"}}}>
                <button style={{margin: "2rem 0 0",} onClick={()=>setIsLoading(true)}>Get Some Data</button>
            </div>
        </>
    );

}