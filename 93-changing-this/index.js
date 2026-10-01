// method -> obj
// function -> global (window, global)

const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        const self = this;
        this.tags.forEach(function (tag) {
            console.log(self.title, tag);
        });
    }
};

video.showTags();

function playVideo(a, b) {
    console.log(this);
}

playVideo.call({ name: 'Mosh' }, 1, 2);
playVideo.apply({ name: 'Mosh' }, [1, 2]);
playVideo.bind({ name: 'Mosh' })();

playVideo();
