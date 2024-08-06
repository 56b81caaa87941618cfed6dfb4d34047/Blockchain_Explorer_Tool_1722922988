/* Summary: Contains a section with three cards with black background and white text.
  The three cards are side by side and each contains a detail name in bold above a detail value.
*/
Vue.component("page_details_cards_component_1722922989", {
    template: `
    <section id="page-details-cards-component" class="py-8 bg-gradient-to-br from-pink-400 to-purple-600">
        <h2 id="details-title" class="text-lg font-semibold mb-5 pl-4 text-white">Details</h2>
        <ul id="details-list" class="grid gap-4 min-[480px]:grid-cols-3 text-sm">
            <li id="project-length" class="px-5 py-4 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white shadow-lg hover:bg-opacity-30 transition duration-300">
                <div class="font-medium text-pink-200">Discover Emerging Blockchain Trends</div>
                <div class="text-white">Our platform scours the latest blockchain data to uncover newly emerging trends, projects, and opportunities you can capitalize on.</div>
            </li>
            <li id="start-date" class="px-5 py-4 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white shadow-lg hover:bg-opacity-30 transition duration-300">
                <div class="font-medium text-pink-200" id="start-date-des-1">Stay Ahead of The Curve</div>
                <time class="text-white" id="start-time-des-1">Don't get left behind as blockchain technology rapidly evolves. Our app helps you stay informed about the latest innovations.</time>
            </li>
            <li id="end-date" class="px-5 py-4 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white shadow-lg hover:bg-opacity-30 transition duration-300">
                <div class="font-medium text-pink-200" id="end-date-des-1">Gain a Competitive Edge</div>
                <time class="text-white" id="end-time-des-1">Leveraging our insights into emerging blockchain trends can give you a critical advantage over competitors still operating with outdated information.</time>
            </li>
        </ul>
    </section>
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});

