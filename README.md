# byu-random-content

This is a simple Web Component that hides all but one of its direct children. It randomly selects one element to display every time the page is loaded.  

# Usage

    <link href="https://cdn.byu.edu/byu-random-content/latest/byu-random-content.min.css" rel="stylesheet" />
    <script async src="https://cdn.byu.edu/byu-random-content/latest/byu-random-content.min.js"></script>
    <byu-random-content id="random-content">
        <div>Slotted Item 1</div>
        <div>Slotted Item 2</div>
        <div>Slotted Item 3</div>
    </byu-random-content>

Note that the component selects from ALL of its direct children, so if you want to group content you'll need to wrap the grouped elements in a group or a span tag:


    <byu-random-content id="random-content">
        <div>
            <div>Grouped Item 1</div>
            <div>Grouped Item 2</div>
        </div>
        <div>Slotted Item 2</div>
    </byu-random-content>

Here's a more complicated example that chooses between various Hero Banners and displays a different one on page load (view the demo.html file in this repository for a working example):

    <byu-random-content id="random-content">
        <byu-hero-banner id="hero" image-source="https://admissions.byu.edu/sites/admissions1/files/winter.jpg" 
            video-source="https://www.youtube.com/watch?v=uTJAeSttacU"
            class="video-hero">
            <span slot="headline">This is the Headline</span>
            <span slot="intro-text">
                This is the intro text. I'm going to add more words here so it's not so short, resulting in 
                a longer piece of intro text.
            </span>
        <a slot="read-more" href="http://www.google.com">Custom "Read More" Text</a>
        </byu-hero-banner>

        <byu-hero-banner id="hero" image-source="dark-image2.jpg" video-source="websitehero.mp4" class="video-hero">
            <span slot="headline">This is the Headline</span>
            <span slot="intro-text">
                This is the intro text. I'm going to add more words here so it's not so short, 
                resulting in a longer piece of intro text.
            </span>
            <a slot="read-more" href="http://www.google.com">Custom "Read More" Text</a>
        </byu-hero-banner>

        <byu-hero-banner id="hero" image-source="side-image.jpg" class="side-image">
            <span slot="headline">This is the Headline</span>
            <span slot="intro-text">
                This is the intro text. I'm going to add more words here so it's not so short, resulting in a 
                longer piece of intro text.
            </span>
        <a slot="read-more" href="http://www.google.com">Custom "Read More" Text</a>
        </byu-hero-banner>

        <byu-hero-banner id="hero" image-source="dark-image.jpg" class="transparent-overlay">
            <span slot="headline">This is the Headline</span>
            <span slot="intro-text">
                This is the intro text. I'm going to add more words here so it's not so short, resulting in 
                a longer piece of intro text.
            </span>
            <a slot="read-more" href="http://www.google.com">Custom "Read More" Text</a>
        </byu-hero-banner>

        <byu-hero-banner id="hero" image-source="dark-image.jpg" class="transparent-overlay byu-hero-right">
            <span slot="headline">This is the Headline</span>
            <span slot="intro-text">
                This is the intro text. I'm going to add more words here so it's not so short, resulting in 
                a longer piece of intro text.
            </span>
            <a slot="read-more" href="http://www.google.com">Custom "Read More" Text</a>
        </byu-hero-banner>
    </byu-random-content>