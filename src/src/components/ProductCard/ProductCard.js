
    import PageTitle from"../components/PageTitle/PageTitle";
    exportdefaultfunctionHome() {​
    return (
    <>
    <PageTitle title="StoreFront" tagline="featured products"/> 
    <main>
    <aside>
    <header>
        <img src=""alt=""/>
    </header>
    <p>Product Name</p>
    <p> product price</p>
    <p> product desciption</p>
    <footer>
        <form action="#"method="POST">
        <input type="hidden"name="uid"value="uid"/>
            <button type="submit">Buy Now</button>
        </form>
    </footer>
    </aside>
    </main>
    </>
    )
    }​
    