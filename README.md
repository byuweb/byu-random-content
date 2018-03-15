# byu-random-content

This is a simple Web Component that accepts any number of template tags and randomly selects a different one to display every time the page is loaded. Note that if an element other than a template tag is provided the component will show an error. This is to make sure that only the content that needs to be shown is loaded by the browser, preventing additional (potentially large) file downloads.  

# Usage

    <link href="https://cdn.byu.edu/byu-random-content/latest/byu-random-content.min.css" rel="stylesheet" />
    <script async src="https://cdn.byu.edu/byu-random-content/latest/byu-random-content.min.js"></script>
    <byu-random-content id="random-content">
        <template>Slotted Item 1</template>
        <template>Slotted Item 2</template>
        <template>Slotted Item 3</template>
    </byu-random-content>

Here's a more complicated example that chooses between various Hero Banners and displays a different one on page load (view the demo.html file in this repository for a working example). Note that because the component requires that these be template tags the content from the banners that are not selected (which could include large image and video files) is never downloaded. You can see this in action at <a href="https://cdn.byu.edu/byu-random-content/latest/demo/index.html">https://cdn.byu.edu/byu-random-content/latest/demo/index.html</a>.

    <byu-random-content id="random-content">
        <template>
            <byu-hero-banner id="hero" image-source="https://admissions.byu.edu/sites/admissions1/files/winter.jpg" 
                video-source="https://www.youtube.com/watch?v=uTJAeSttacU"
                class="video-hero">
                <span slot="headline">This is the Headline</span>
                <span slot="intro-text">
                    This is the intro text. I'm going to add more words here so it's not so short, resulting 
                    in a longer piece of intro text.
                </span>
            <a slot="read-more" href="http://www.google.com">Custom "Read More" Text</a>
            </byu-hero-banner>
        </template>
        <template>
            <byu-hero-banner id="hero" image-source="dark-image2.jpg" video-source="websitehero.mp4" class="video-hero">
                <span slot="headline">This is the Headline</span>
                <span slot="intro-text">
                    This is the intro text. I'm going to add more words here so it's not so short, 
                    resulting in a longer piece of intro text.
                </span>
                <a slot="read-more" href="http://www.google.com">Custom "Read More" Text</a>
            </byu-hero-banner>
        </template>
        <template>
            <byu-hero-banner id="hero" image-source="sideimage.jpg" class="side-image">
                <span slot="headline">This is the Headline</span>
                <span slot="intro-text">
                    This is the intro text. I'm going to add more words here so it's not so short, resulting 
                    in a longer piece of intro text.
                </span>
            <a slot="read-more" href="http://www.google.com">Custom "Read More" Text</a>
            </byu-hero-banner>
        </template>
        <template>
            <byu-hero-banner id="hero" image-source="dark-image.jpg" class="transparent-overlay">
                <span slot="headline">This is the Headline</span>
                <span slot="intro-text">
                    This is the intro text. I'm going to add more words here so it's not so short, resulting 
                    in a longer piece of intro text.
                </span>
                <a slot="read-more" href="http://www.google.com">Custom "Read More" Text</a>
            </byu-hero-banner>
        </template>
        <template>
            <byu-hero-banner id="hero" image-source="dark-image.jpg" class="transparent-overlay byu-hero-right">
                <span slot="headline">This is the Headline</span>
                <span slot="intro-text">
                    This is the intro text. I'm going to add more words here so it's not so short, resulting 
                    in a longer piece of intro text.
                </span>
                <a slot="read-more" href="http://www.google.com">Custom "Read More" Text</a>
            </byu-hero-banner>
        </template>
    </byu-random-content>