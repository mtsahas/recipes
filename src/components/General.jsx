import "./general.css"
function General() {
  return (
    <>
        <div class="newspaper">
        <header>
            <h1>The Daily News</h1>
            <p class="date">November 23, 2024</p>
        </header>
        <main>
            <article class="main-article">
            <h2>Headline Story: The Future of Tech</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur auctor semper lorem, a blandit justo.</p>
            </article>

            <section class="columns">
            <article>
                <h3>World News</h3>
                <p>Nulla facilisi. Suspendisse potenti. Pellentesque a semper velit, sed lacinia urna. Vivamus vel urna nec lectus aliquet aliquet.</p>
            </article>
            <article>
                <h3>Business</h3>
                <p>Maecenas sed ligula nec erat volutpat fermentum. Sed tincidunt, eros quis faucibus viverra, odio est sagittis justo.</p>
            </article>
            <article>
                <h3>Sports</h3>
                <p>In hendrerit, odio eget vestibulum gravida, urna mi tincidunt lorem, in gravida augue eros a lectus.</p>
            </article>
            </section>
        </main>
        <footer>
            <p>&copy; 2024 The Daily News</p>
        </footer>
        </div>
    </>
  );
}

export default General