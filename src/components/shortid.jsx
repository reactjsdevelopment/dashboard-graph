import shortid from  "shortid";

{

    comments.map((comment, index) => {

        <Comment

            {...comment}

            key={shortid.generate()} />

    })

}