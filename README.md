# catan_board_generator
Generate an well-balanced board for the game Settlers of Catan

I might someday launch a full build for this but for right now it was just a fun project to make in an afternoon. I have now used it for several Catan games with friends, and it can provide some pretty interesting and fun setups.

# Technology
I built the algorithm for number dispersion and tile placement in Python and then built the interface using React.js and Typescript. Someday I'll rewrite the Python code in JS so that it can all be run off node (vs. the two-server system I'm currently employing), but again, this was just a fun project I made in an afternoon and this works for my purposes right now.

# How To Use
1. Clone the repository:

    ```bash
    git clone https://github.com/m4ur1n0/catan_board_generator.git
    cd catan_board_generator
    ```

2. Create and activate a virtual environment:

    ```bash
    python3 -m venv venv
    source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
    ```

3. Install the dependencies:

    ```bash
    pip install -r requirements.txt
    ```

4. Run your application as needed:

    ```bash
    ./start_servers.sh
    ```
    
5. Kill the servers when you're through:

   **NOTE:** this will kill any npm dev servers or processes running python scripts named 'server.py'

    ```bash
    ./kill_servers.sh
    ```
