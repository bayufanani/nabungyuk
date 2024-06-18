<script setup lang="ts"></script>
<template>
    <div class="content">
        <div
            class="card mx-4 mt-4 p-4 text-gray-900 overflow-hidden flex flex-col"
        >
            <h1 class="text-xl font-bold">About</h1>
            <p class="text-xs">NabungYuk by Bayu Fanani 2024</p>
            <div class="about-info">
                <span class="gradient top"></span>
                <div class="container-text">
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Consequatur quaerat quam assumenda debitis quasi
                        inventore rerum voluptas quidem ab voluptates, autem,
                        eaque asperiores eos sapiente excepturi temporibus quos
                        minus. Ipsum?
                    </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Ullam sapiente commodi ex. Fugit voluptatum vel
                        cupiditate quod, ipsam minima, nostrum eius aut placeat
                        incidunt, porro doloribus. Esse nostrum nobis sunt a
                        pariatur nam quos harum! Cupiditate nisi minima adipisci
                        neque quas officiis inventore quos modi consequuntur
                        explicabo soluta itaque, vel cum exercitationem sed,
                        unde sunt velit nam. Harum fugit dicta eos a, officiis
                        in accusamus! Corrupti omnis, eius similique quod
                        impedit ipsa. Delectus nemo nam iure itaque aspernatur
                        enim et soluta minima mollitia tempora! Perspiciatis
                        reprehenderit laudantium amet atque cum maiores
                        incidunt, doloribus adipisci quia at rerum debitis
                        consectetur iusto totam, asperiores iure dolorum
                        voluptate laborum illo molestias. Nisi, tempora
                        laboriosam aspernatur mollitia at fugit atque, tenetur
                        illum delectus quod eum! Neque sunt ut atque
                        necessitatibus aut facilis aliquam libero? Eligendi
                        perferendis et ipsum quibusdam, pariatur amet ex earum
                        voluptatum adipisci sequi qui laudantium. Et cum optio
                        deleniti blanditiis ex voluptatibus recusandae.
                        Voluptate unde reprehenderit perspiciatis, suscipit illo
                        officiis maxime voluptates a error ipsam deserunt! Natus
                        repellat expedita dicta sapiente eius id culpa, nemo
                        fugit tempore dolores laborum doloremque, ex optio
                        corrupti nulla fugiat eos, amet ad excepturi doloribus
                        numquam necessitatibus perferendis odit asperiores! Vel,
                        accusamus? Repellat, exercitationem perferendis ipsa
                        necessitatibus deserunt laudantium non, mollitia nihil
                        obcaecati reprehenderit atque illum accusantium illo?
                        Sequi, minima. Ad iste eaque laboriosam tenetur possimus
                        alias sapiente repellat praesentium delectus facere
                        minima eligendi voluptatem earum esse quo blanditiis
                        quis, unde corporis molestiae voluptas? Inventore
                        necessitatibus amet cupiditate similique quam suscipit
                        eius delectus deserunt, impedit nesciunt alias dolores
                        in sequi minus iste consequatur sapiente. Voluptates
                        nostrum ducimus maiores adipisci unde maxime libero
                        impedit, ipsum omnis molestiae magnam reprehenderit
                        exercitationem molestias quia consequuntur porro
                        consequatur atque? Ex nihil voluptate accusantium vel
                        iure soluta facere, possimus minus ea mollitia amet
                        accusamus. Velit asperiores optio nostrum rerum nulla
                        voluptates.
                    </p>
                </div>
                <span class="gradient bottom"></span>
            </div>
        </div>
    </div>
</template>
<style lang="postcss" scoped>
.content {
    @apply pb-32 flex flex-col justify-center h-svh;
}
.card {
    max-height: 90%;
}
.about-info {
    @apply relative flex overflow-hidden;
}
.container-text {
    @apply overflow-auto h-full py-4;
}
.gradient {
    @apply h-8 w-full absolute left-0 right-0;
}
.gradient.top {
    top: -1px;
    /* #ecf3f580 */
    background: linear-gradient(to bottom, #f5f9fa, transparent);
}
.gradient.bottom {
    bottom: -1px;
    /* #ecf3f580 */
    background: linear-gradient(to top, #f5f9fa, transparent);
}
</style>
