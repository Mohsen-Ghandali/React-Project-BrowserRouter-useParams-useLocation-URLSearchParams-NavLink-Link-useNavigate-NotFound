import { memo } from "react";
import "./Blog.css"
const Blog = () => {
    return (

        <main className="blog">
            <h1>Our Blog</h1>

            <article>
                <h2>Post Title 1</h2>
                <p class="metadata">Published on August 5, 2023 by John Doe</p>
                <blockquote>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra ultrices aliquam. Cras varius sapien sit amet maximus faucibus. Integer posuere urna vitae ultrices consequat. Sed ultricies justo id euismod semper. Proin a nunc dapibus, auctor est ut, tincidunt felis. Nulla facilisi. Sed vestibulum tincidunt lectus id tristique. Nam lacinia efficitur rhoncus. Integer nec risus eu ligula pharetra consectetur in a arcu. Sed non nunc aliquam, venenatis nisl non, auctor justo. Nunc congue, sem in vehicula elementum, purus ipsum bibendum nunc, sit amet dignissim odio mi ac est. Nullam sit amet erat vitae felis dapibus volutpat in quis justo.</p>
                    <p>Phasellus ullamcorper, enim id aliquet feugiat, mi justo posuere orci, sit amet laoreet arcu orci et lectus. Fusce iaculis nisi et nisl posuere ultrices. Nulla facilisi. Vestibulum facilisis turpis quam, a aliquam nibh hendrerit in. Curabitur feugiat varius bibendum. Nullam eget purus volutpat, vehicula nisi a, congue metus. Quisque at nibh nisl. Etiam sit amet massa id enim porttitor consectetur eu vel dui. Nunc aliquam facilisis nulla, quis vulputate erat elementum eget. Nunc sagittis nec risus in tristique.</p>
                    <p>Quisque consequat scelerisque lectus, ac faucibus elit aliquam nec. Proin ac malesuada nunc, a vestibulum eros. Nullam laoreet odio id odio euismod congue. Curabitur nec odio mauris. Nam vel congue enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum volutpat sapien et ligula facilisis bibendum.</p>
                </blockquote>
            </article>
            <article>
                <h2>Post Title 2</h2>
                <p class="metadata">Published on August 7, 2023 by Jane Smith</p>
                <blockquote>
                    <p>Phasellus ut nulla et justo a risus. Aenean euismod mauris eu tincidunt egestas. Duis vitae dui non odio convallis semper. Nam suscipit sapien at metus tincidunt, eu sollicitudin ex vulputate. Curabitur quis rhoncus risus. Maecenas euismod purus in dictum scelerisque. Donec egestas libero id libero rhoncus, ut venenatis quam eleifend. Nulla facilisi. Nulla venenatis nisl sed pharetra rutrum. Aenean euismod metus eu dapibus tristique. Integer laoreet, dui ut facilisis fermentum, ex arcu luctus arcu, eu facilisis mi nisl non ligula. Fusce tempor scelerisque orci, vitae pharetra ligula fermentum sit amet.</p>
                    <p>Aliquam ac dolor nec elit dignissim commodo. Nunc a ipsum nec odio consequat cursus. Duis vel elit ut justo vehicula iaculis. Sed quis velit neque. Suspendisse potenti. Maecenas a elementum mi, a vulputate ipsum. Suspendisse sit amet sapien sapien. Proin sodales eget lorem quis tincidunt. Nulla sit amet metus eu justo posuere dignissim. In a ante ac nisl malesuada auctor at eu arcu. Nam et elit ipsum. Sed bibendum quam quis ultrices tincidunt. Nulla facilisi. Mauris nec ipsum a elit blandit aliquet sit amet eu dolor.</p>
                </blockquote>
            </article>
        </main>
    );
}

export default memo(Blog);